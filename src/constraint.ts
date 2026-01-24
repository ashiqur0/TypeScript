// Constraints: strict rules

type Student = {
    name: string, 
    id: number,
    batch: string,
    department: string
}
const addStudentToCourse = <T extends Student>(studentInfo: T): T => {
    return {
        course: "Computer Science",
        ...studentInfo
    }
}

const student1 = addStudentToCourse({
    name: "Ashiqur Rahman",
    id: 1009,
    batch: "2023",
    department: "Engineering",
    university: 'Pundra University of Science & Technology'
});

console.log(student1);