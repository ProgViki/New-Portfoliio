import { skills } from "./dummyData";

const Skills = () => (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-semibold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {skills.map((skill) => (
          <span key={skill} className="m-2 p-2 bg-blue-100 rounded text-blue-800">{skill}</span>
        ))}
      </div>
    </section>
  );

  export default Skills;