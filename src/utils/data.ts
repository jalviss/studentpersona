import { IStudent } from "../interfaces/Student.interfaces";
import defaultAvatar from "../assets/images/avatarDefault.png"
import instructorDefaultAvatar from "../assets/images/instructorDefault.png"

export const studentData: IStudent[] = ([
    {
        id: 1,
        name: 'Silvia Summer Wibowo',
        nim: '2602127781',
        avatar: defaultAvatar,

        // in case need login
        email: 'silvia.wibowo@binus.ac.id',
        password: 'a',

        // for classes in homepage
        classes: [
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Linear Algebra',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Calculus',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Human Computer Interaction',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Model Deployment',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Artificial Inteligence',
            },
        ],

        // my statistics page
        cummulativeGPA: 4,
        totalAttendance: 100,
        SATPoints: 176,
        comservHours: 15,

        // GPA performance page
        GPA: [
            {
                semester: 'Overall',
                details: [
                    {
                        description: 'Semester 1',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 2',
                        myGPA: 3.95,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 3',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        description: 'Algorithm and Programming',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Calculus',
                        myGPA: 3.95,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Pancasila',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Discrete Math',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Introduction to Data Science',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Program Design Method',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        description: 'Data Mining and Visualization',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Scientific Computing',
                        myGPA: 3.95,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Kewarganegaraan',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Data Structure',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Basic Statistic',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Entrepreneurship: Ideation',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Linear Algebra',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        description: 'Artificial Inteligence',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Database Technology',
                        myGPA: 3.95,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Data Management and Organization',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Machine Learning',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Character Building: Agama',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Bayesian Data Analysis',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Indonesian',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Computational Physics',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
        ],

        // Attendance
        attendance: [
            {
                semester: 'Overall',
                details: [
                    {
                        course: 'Semester 1',
                        attendanceStatus: 100,
                        attended: 141,
                        mustAttend: 141,
                        canAbsent: 26,
                    },
                    {
                        course: 'Semester 2',
                        attendanceStatus: 100,
                        attended: 137,
                        mustAttend: 137,
                        canAbsent: 21,
                    },
                    {
                        course: 'Semester 3',
                        attendanceStatus: 100,
                        attended: 135,
                        mustAttend: 135,
                        canAbsent: 21,
                    },
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        course: 'Algorithm and Programming',
                        attendanceStatus: 100,
                        attended: 44,
                        mustAttend: 44,
                        canAbsent: 9,
                    },
                    {
                        course: 'Calculus',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Character Building: Pancasila',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Discrete Math',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Introduction to Data Science',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Program Design Method',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 5,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        course: 'Data Mining and Visualization',
                        attendanceStatus: 100,
                        attended: 22,
                        mustAttend: 22,
                        canAbsent: 3,
                    },
                    {
                        course: 'Scientific Computing',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Kewarganegaraan',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Data Structure',
                        attendanceStatus: 100,
                        attended: 44,
                        mustAttend: 44,
                        canAbsent: 7,
                    },
                    {
                        course: 'Basic Statistic',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Entrepreneurship: Ideation',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Linear Algebra',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        course: 'Artificial Inteligence',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Database Technology',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Data Management and Organization',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Machine Learning',
                        attendanceStatus: 100,
                        attended: 20,
                        mustAttend: 20,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Agama',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Bayesian Data Analysis',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Indonesian',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Computational Physics',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Steven Forsythia',
        nim: '2602023456',
        avatar: defaultAvatar,

        // in case need login
        email: 'steven.forsythia@binus.ac.id',
        password: 'a',

        // for classes in homepage
        classes: [
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Linear Algebra',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Calculus',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Human Computer Interaction',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Model Deployment',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Artificial Inteligence',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Computer Networks',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Computational Biology',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Deep Learning',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Computational Physics',
            },
        ],

        // my statistics page
        cummulativeGPA: 3.67,
        totalAttendance: 80,
        SATPoints: 101,
        comservHours: 10,

        // GPA performance page
        GPA: [
            {
                semester: 'Overall',
                details: [
                    {
                        description: 'Semester 1',
                        myGPA: 3.93,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 2',
                        myGPA: 3.55,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 3',
                        myGPA: 3.59,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        description: 'Algorithm and Programming',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Calculus',
                        myGPA: 3.67,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Pancasila',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Discrete Math',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Introduction to Data Science',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Program Design Method',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        description: 'Data Mining and Visualization',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Scientific Computing',
                        myGPA: 3.33,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Kewarganegaraan',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Data Structure',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Basic Statistic',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Entrepreneurship: Ideation',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Linear Algebra',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        description: 'Artificial Inteligence',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Database Technology',
                        myGPA: 3.67,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Data Management and Organization',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Machine Learning',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Character Building: Agama',
                        myGPA: 4.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Bayesian Data Analysis',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Indonesian',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Computational Physics',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
        ],

        // Attendance
        attendance: [
            {
                semester: 'Overall',
                details: [
                    {
                        course: 'Semester 1',
                        attendanceStatus: 100,
                        attended: 138,
                        mustAttend: 141,
                        canAbsent: 26,
                    },
                    {
                        course: 'Semester 2',
                        attendanceStatus: 100,
                        attended: 130,
                        mustAttend: 137,
                        canAbsent: 21,
                    },
                    {
                        course: 'Semester 3',
                        attendanceStatus: 100,
                        attended: 133,
                        mustAttend: 135,
                        canAbsent: 21,
                    },
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        course: 'Algorithm and Programming',
                        attendanceStatus: 100,
                        attended: 40,
                        mustAttend: 44,
                        canAbsent: 9,
                    },
                    {
                        course: 'Calculus',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Character Building: Pancasila',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Discrete Math',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Introduction to Data Science',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Program Design Method',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 5,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        course: 'Data Mining and Visualization',
                        attendanceStatus: 100,
                        attended: 22,
                        mustAttend: 22,
                        canAbsent: 3,
                    },
                    {
                        course: 'Scientific Computing',
                        attendanceStatus: 100,
                        attended: 18,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Kewarganegaraan',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Data Structure',
                        attendanceStatus: 100,
                        attended: 44,
                        mustAttend: 44,
                        canAbsent: 7,
                    },
                    {
                        course: 'Basic Statistic',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Entrepreneurship: Ideation',
                        attendanceStatus: 100,
                        attended: 10,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Linear Algebra',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        course: 'Artificial Inteligence',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Database Technology',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Data Management and Organization',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Machine Learning',
                        attendanceStatus: 100,
                        attended: 20,
                        mustAttend: 20,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Agama',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Bayesian Data Analysis',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Indonesian',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Computational Physics',
                        attendanceStatus: 100,
                        attended: 16,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Nama Saran',
        nim: '2602227632',
        avatar: defaultAvatar,

        // in case need login
        email: 'nama.saran@binus.ac.id',
        password: 'a',

        // for classes in homepage
        classes: [
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Linear Algebra',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Calculus',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Human Computer Interaction',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Model Deployment',
            },
            {
                instructorAvatar: instructorDefaultAvatar,
                instructor: 'Franz',
                course: 'Artificial Inteligence',
            },
        ],

        // my statistics page
        cummulativeGPA: 3,
        totalAttendance: 70,
        SATPoints: 76,
        comservHours: 20,

        // GPA performance page
        GPA: [
            {
                semester: 'Overall',
                details: [
                    {
                        description: 'Semester 1',
                        myGPA: 3.23,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 2',
                        myGPA: 2.90,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Semester 3',
                        myGPA: 3,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        description: 'Algorithm and Programming',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Calculus',
                        myGPA: 3.33,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Pancasila',
                        myGPA: 2.50,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Discrete Math',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Introduction to Data Science',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Program Design Method',
                        myGPA: 3.33,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        description: 'Data Mining and Visualization',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Scientific Computing',
                        myGPA: 3.33,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Character Building: Kewarganegaraan',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Data Structure',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Basic Statistic',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Entrepreneurship: Ideation',
                        myGPA: 2.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Linear Algebra',
                        myGPA: 3.33,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        description: 'Artificial Inteligence',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Database Technology',
                        myGPA: 3.67,
                        classGPA: 3.50,
                        binusGPA: 3.75,
                    },
                    {
                        description: 'Data Management and Organization',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Machine Learning',
                        myGPA: 3.67,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Character Building: Agama',
                        myGPA: 2.50,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Bayesian Data Analysis',
                        myGPA: 3.33,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Indonesian',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                    {
                        description: 'Computational Physics',
                        myGPA: 3.00,
                        classGPA: 3.60,
                        binusGPA: 3.25,
                    },
                ],
            },
        ],

        // Attendance
        attendance: [
            {
                semester: 'Overall',
                details: [
                    {
                        course: 'Semester 1',
                        attendanceStatus: 100,
                        attended: 130,
                        mustAttend: 141,
                        canAbsent: 26,
                    },
                    {
                        course: 'Semester 2',
                        attendanceStatus: 100,
                        attended: 127,
                        mustAttend: 137,
                        canAbsent: 21,
                    },
                    {
                        course: 'Semester 3',
                        attendanceStatus: 100,
                        attended: 115,
                        mustAttend: 135,
                        canAbsent: 21,
                    },
                ],
            },
            {
                semester: 'Semester 1',
                details: [
                    {
                        course: 'Algorithm and Programming',
                        attendanceStatus: 100,
                        attended: 38,
                        mustAttend: 44,
                        canAbsent: 9,
                    },
                    {
                        course: 'Calculus',
                        attendanceStatus: 100,
                        attended: 24,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Character Building: Pancasila',
                        attendanceStatus: 100,
                        attended: 11,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Discrete Math',
                        attendanceStatus: 100,
                        attended: 24,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Introduction to Data Science',
                        attendanceStatus: 100,
                        attended: 10,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Program Design Method',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 19,
                        canAbsent: 5,
                    },
                ],
            },
            {
                semester: 'Semester 2',
                details: [
                    {
                        course: 'Data Mining and Visualization',
                        attendanceStatus: 100,
                        attended: 20,
                        mustAttend: 22,
                        canAbsent: 3,
                    },
                    {
                        course: 'Scientific Computing',
                        attendanceStatus: 100,
                        attended: 18,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Kewarganegaraan',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Data Structure',
                        attendanceStatus: 100,
                        attended: 42,
                        mustAttend: 44,
                        canAbsent: 7,
                    },
                    {
                        course: 'Basic Statistic',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Entrepreneurship: Ideation',
                        attendanceStatus: 100,
                        attended: 10,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Linear Algebra',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                ],
            },
            {
                semester: 'Semester 3',
                details: [
                    {
                        course: 'Artificial Inteligence',
                        attendanceStatus: 100,
                        attended: 26,
                        mustAttend: 26,
                        canAbsent: 4,
                    },
                    {
                        course: 'Database Technology',
                        attendanceStatus: 100,
                        attended: 19,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                    {
                        course: 'Data Management and Organization',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Machine Learning',
                        attendanceStatus: 100,
                        attended: 20,
                        mustAttend: 20,
                        canAbsent: 3,
                    },
                    {
                        course: 'Character Building: Agama',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Bayesian Data Analysis',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Indonesian',
                        attendanceStatus: 100,
                        attended: 13,
                        mustAttend: 13,
                        canAbsent: 2,
                    },
                    {
                        course: 'Computational Physics',
                        attendanceStatus: 100,
                        attended: 16,
                        mustAttend: 19,
                        canAbsent: 3,
                    },
                ],
            },
        ],
    },
])