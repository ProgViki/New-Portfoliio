import { skillsList } from "./dummyData";

const Skills = () => (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-semibold text-center dark:text-white ">Skills</h2>
      <div className="flex flex-wrap justify-center mt-6">
        
      {skillsList.map((skillCategory) => (
        <div key={skillCategory.category} className="mb-8 dark:bg-blue-200 p-8 rounded-sm">
          {/* Category Title */}
          <h3 className="text-2xl text-center font-semibold mb-4">{skillCategory.category}</h3>
          {/* Skills List */}
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-4 dark:text-white">
            {skillCategory.skills.map((skill, index) => (
              <li key={index} className="skill-item text-xs bg-gray-100 dark:bg-gray-700 rounded-md p-2 list-none">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </section>
  );

  export default Skills;