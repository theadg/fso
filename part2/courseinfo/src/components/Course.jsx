import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ courses }) => {
    return (
        <>
            {courses.map((course) => {
                // destructure course properties
                const { id, name, parts } = course;
                return (
                    <div key={id}>
                        <Header title={name}/>
                        <Content parts={parts} />
                        <Total parts={parts} />
                    </div>
                )
            })}
        </>
    )
}

export default Course;
