export interface IClass {
    instructorAvatar: string;
    instructor: string;
    course: string;
}

export interface IGPA {
    semester: string;
    details: IGPADetails[];
}

export interface IGPADetails {
    description: string;
    myGPA: number;
    classGPA: number;
    binusGPA: number;
}

export interface IAttendance {
    semester: string;
    details: IAttendanceDetails[];
}

export interface IAttendanceDetails {
    course: string;
    attendanceStatus: number;
    attended: number;
    mustAttend: number;
    canAbsent: number;
}

export interface IStudent {
    id: number;
    name: string;
    nim: string;
    avatar: string;

    // in case need login
    email: string;
    password: string;

    // for classes in homepage
    classes: IClass[];

    // my statistics page
    cummulativeGPA: number;
    totalAttendance: number;
    SATPoints: number;
    comservHours: number;

    // GPA performance page
    GPA: IGPA[];

    // Attendance
    attendance: IAttendance[];
}