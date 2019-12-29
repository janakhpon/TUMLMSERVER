export const typeDefs = `
    type Query {
        students(query: String): [Student!]!
        resetStudents: MSG
        results(query: String): [ResultInfo!]!
        resetResults: MSG
        enrollments(query: String) : [EnrollmentInfo!]!
        resetEnrollments: MSG
    }

    type Mutation {
        enrollStudent(data: StudentEnrollmentInput! ) : Student!
        updateStudent (data: StudentUpdateInput! ) : Student!
        expulseStudent(data: SpecificRemovalInput! ) : MSG
        createResult(data: CreateResultInput!) : ResultInfo!
        updateResult(data: UpdateResultInput!) : ResultInfo!
        removeResult(data: SpecificRemovalInput!) : MSG
        createEnrollment(data: CreateEnrollmentInput! ) : EnrollmentInfo!
        updateEnrollment(data: UpdateEnrollmentInput! ) : EnrollmentInfo!
        removeEnrollment(data: SpecificRemovalInput! ) : MSG
    }

    input StudentEnrollmentInput {
        avatar: String!
        burmesename: String!
        englishname: String!
        email: String!
        password: String!
        studentnrc: String!
        birthdate: String!
        bloodtype: String!
        height: String!
        bodymark: String
        dadburmesename: String!
        dadenglishname: String!
        dadnrc: String!
        dadcareer: String!
        momburmesename: String!
        momenglishname: String!
        momnrc: String!
        momcareer: String!
        major: String!
        matriculationno: String!
        matriculationyear: String!
        permanentaddress: String!
        permanentaddressph: String!
        addressinreach: String!
        addressinreachph: String!
        studentsign: String!
    }

    input StudentUpdateInput {
        _id: ID!
        avatar: String!
        burmesename: String!
        englishname: String!
        email: String!
        password: String!
        activated: String
        code: String
        studentnrc: String!
        birthdate: String!
        bloodtype: String!
        height: String!
        bodymark: String
        dadburmesename: String!
        dadenglishname: String!
        dadnrc: String!
        dadcareer: String!
        momburmesename: String!
        momenglishname: String!
        momnrc: String!
        momcareer: String!
        major: String!
        matriculationno: String!
        matriculationyear: String!
        permanentaddress: String!
        permanentaddressph: String!
        addressinreach: String!
        addressinreachph: String!
        studentsign: String!
    }

    input CreateResultInput {
        passed: Boolean!
        status: Boolean!
        previousrollno: String!
        currentrollno: String!
        nrc: String!
        name: String!
        major: String!
        course: String!
    }

    input UpdateResultInput {
        _id: ID!
        passed: Boolean!
        status: Boolean!
        previousrollno: String!
        currentrollno: String!
        nrc: String!
        name: String!
        major: String!
        course: String!
        year: String!
    }

    input CreateEnrollmentInput {
        nrc: String!
        applyfor: String!
        previousrollno: String!
        currentrollno: String!
        contactableaddress: String!
        contactableaddressph: String!
        headofdepartmentsign: String!
        headofdepartmentname: String!
        department: String!
    }

    input UpdateEnrollmentInput {
        _id: ID!
        nrc: String!
        applyfor: String!
        previousrollno: String!
        currentrollno: String!
        contactableaddress: String!
        contactableaddressph: String!
        headofdepartmentsign: String!
        headofdepartmentname: String!
        department: String!
        payed: String!
        aprroved: Boolean!
    }

    input SpecificRemovalInput {
        _id: ID!
    }

    type MSG {
        msg: String
    }

    type Student {
        _id: ID!
        avatar: String!
        burmesename: String!
        englishname: String!
        password: String!
        activated: String
        code: String
        studentnrc: String!
        birthdate: String!
        bloodtype: String!
        height: String!
        bodymark: String
        dadburmesename: String!
        dadenglishname: String!
        dadnrc: String!
        dadcareer: String!
        momburmesename: String!
        momenglishname: String!
        momnrc: String!
        momcareer: String!
        major: String!
        matriculationno: String!
        matriculationyear: String!
        permanentaddress: String!
        permanentaddressph: String!
        addressinreach: String!
        addressinreachph: String!
        studentsign: String!
        date: String!
    }

    type ResultInfo {
        _id: ID!
        passed: Boolean!
        status: Boolean!
        previousrollno: String!
        currentrollno: String!
        nrc: String!
        name: String!
        major: String!
        course: String!
        year: String!
    }

    type EnrollmentInfo {
        _id: ID!
        nrc: String!
        applyfor: String!
        previousrollno: String!
        currentrollno: String!
        contactableaddress: String!
        contactableaddressph: String!
        headofdepartmentsign: String!
        headofdepartmentname: String!
        department: String!
        payed: String!
        aprroved: Boolean!
        date: String!
    }
`