import hashPassword from '../utils'

export const resolvers = {

    Query: {
        async students(parent, args, { StudentInfo }, info) {
            let students = await StudentInfo.find()
            if (!args.query) {
                return students
            }

            let student = await StudentInfo.find({ id: args.query })
            return student
        },
        async resetStudents(parent, args, { StudentInfo, EnrollmentInfo, ResultInfo }, info) {
            try {
                await StudentInfo.deleteMany({})
                await EnrollmentInfo.deleteMany({})
                await ResultInfo.deleteMany({})
                const success = {
                    msg: "reset all"
                }
                return success
            } catch (err) {
                throw new Error('failed to reset students!')
            }
        },
        async results(parent, args, { ResultInfo }, info) {
            let results = await ResultInfo.find()
            if (!args.query) {
                return results
            }

            let result = await ResultInfo.findOne({ nrc: args.query })
            return result
        },
        async resetResults(parent, args, { ResultInfo }, info) {
            try {
                await ResultInfo.deleteMany({})
                const success = {
                    msg: "reset all"
                }
                return success
            } catch (err) {
                throw new Error('failed to reset students!')
            }
        },
        async enrollments(parent, args, { EnrollmentInfo }, info) {
            let enrollments = await EnrollmetInfo.find()
            if (!args.query) {
                return enrollments
            }

            let enrollment = await EnrollmentInfo.findOne({ nrc: args.query })
            return enrollment
        },
        async resetEnrollments(parent, args, { EnrollmentInfo }, info) {
            try {
                await EnrollmentInfo.deleteMany({})
                const success = {
                    msg: "reset all"
                }
                return success
            } catch (err) {
                throw new Error('failed to reset students!')
            }
        }
    },
    Mutation: {
        async enrollStudent(parent, args, { StudentInfo }, info) {
            const nrcTaken = await StudentInfo.findOne({ studentnrc: args.data.studentnrc })

            if (nrcTaken) {
                throw new Error('NRC Taken!')
            }

            const emailTaken = await StudentInfo.findOne({ email: args.data.email })

            if (emailTaken) {
                throw new Error('Email Taken!')
            }

            let d = new Date()
            let date = parseInt(d.getTime())
            const password = await hashPassword(args.data.password)
            let code = null
            let activated = Boolean(false)

            const dbstudent = new StudentInfo({
                ...args.data,
                password,
                activated,
                code,
                date
            })

            console.log(dbstudent)


            try {
                return await dbstudent.save()
            } catch (err) {
                throw new Error(err)
            }

        },
        async updateStudent(parent, args, { StudentInfo }, info) {

            const studentExists = await StudentInfo.findOne({
                _id: args.data._id
            })

            if (!studentExists) {
                throw new Error('student does not exist!')
            }

            let d = new Date()
            let date = parseInt(d.getTime())
            const password = await hashPassword(args.data.password)
            let code = null
            let activated = Boolean(false)

            const dbstudent = {
                ...args.data,
                password,
                activated,
                code,
                date
            }

            try {
                return await StudentInfo.findOneAndUpdate({ _id: args.data._id }, dbstudent, {
                    upsert: true,
                    new: true
                })

            } catch (err) {
                throw new Error(err)
            }

        },
        async expulseStudent(parent, args, { StudentInfo }, info) {
            try {
                await StudentInfo.deleteOne({ _id: args.data._id })
                let success = {
                    msg: "REMOVED SUCCESSFULLY"
                }
                return success
            } catch (error) {
                let err = {
                    msg: "FAILED TO REMOVE"
                }
                return err
            }
        },
        async createResult(parent, args, { ResultInfo, StudentInfo }, info) {
            let nrcExists = StudentInfo.findOne({ studentnrc: args.data.nrc })

            if (!nrcExists) {
                throw new Error('No Student found with provided NRC!')
            }

            let d = new Date()
            let year = d.getFullYear()

            const dbresult = ResultInfo({
                ...args.data,
                year

            })

            try {
                return dbresult.save()
            } catch (err) {
                throw new Error('err')
            }

        },
        async updateResult(parent, args, { ResultInfo }, info) {
            let nrcExists = StudentInfo.findOne({ studentnrc: args.data.nrc })

            if (!nrcExists) {
                throw new Error('No Student found with provided NRC!')
            }

            const dbresult = {
                ...args.data

            }

            try {
                return ResultInfo.findOneAndUpdate({ _id: args.data._id }, dbresult, {
                    upsert: true,
                    new: true
                })
            } catch (err) {
                throw new Error('err')
            }
        },
        async removeResult(parent, args, { ResultInfo }, info) {
            try {
                await ResultInfo.deleteOne({ _id: args.data._id })
                let success = {
                    msg: "REMOVED SUCCESSFULLY"
                }
                return success
            } catch (error) {
                let err = {
                    msg: "FAILED TO REMOVE"
                }
                return err
            }
        },
        async createEnrollment(parent, args, { EnrollmentInfo }, info) {
            const nrcTaken = await EnrollmentInfo.findOne({ nrc: args.data.nrc })
            const rollTaken = await EnrollmentInfo.findOne({ currentrollno: args.data.currentrollno })

            if (nrcTaken && rollTaken) {
                throw new Error('Already in the list!')
            }

            let payed = "34,800.00 ks"
            let approved = Boolean(false)
            let d = new Date()
            let date = parseInt(d.getTime())
            const dbenrollment = EnrollmentInfo({
                ...args.data,
                payed,
                approved,
                date

            })

            console.log(dbenrollment)

            try {
                return await dbenrollment.save()
            } catch (err) {
                throw new Error(err)
            }
        },
        async updateEnrollment(parent, args, { EnrollmentInfo }, info) {
            let idExists = EnrollmentInfo.findOne({ _id: args.data._id })

            if (!idExists) {
                throw new Error('Enrollment is not in the list')
            }

            const dbenrollment = EnrollmentInfo({
                ...args.data

            })

            try {
                return dbenrollment.save()
            } catch (err) {
                throw new Error(err)
            }
        },
        async removeEnrollment(parent, args, { EnrollmentInfo }, info) {
            try {
                await EnrollmentInfo.deleteOne({ _id: args.data._id })
                let success = {
                    msg: "REMOVED SUCCESSFULLY"
                }
                return success
            } catch (error) {
                let err = {
                    msg: "FAILED TO REMOVE"
                }
                return err
            }
        }
    }


}