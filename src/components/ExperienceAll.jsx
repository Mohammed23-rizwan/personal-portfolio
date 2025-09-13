import React from 'react'

const ExperienceAll = () => {
  return (
    <div className="md:h-[350px] grid md:grid-cols-2 grid-cols-1 gap-10">
      <div className="bg-primary rounded-[14px] p-10">
        <div className="flex justify-between ">
          <div className="sm:text-sm text-[11px]">
            <h1>Freelancer</h1>
            <p className="text-txtprimaryalt1 sm:text-sm  text-[11px] suppercase">
              ELECTRICIAN / Electrical Technician
            </p>
          </div>
          <span className="px-2 rounded-[10px] text-txtprimaryalt1 sm:text-sm text-[8px] uppercase bg-bgprimary flex justify-center items-center">
            2021-2023
          </span>
        </div>
        <div className="w-full h-[1px] bg-txtprimaryalt rounded-full mt-7"></div>
        <ol className="sm:text-[16px] text-sm text-justify gap-3 mt-3 flex flex-col ">
          <li className="">
            Handled electrical installations for residential and commercial
            projects
          </li>
          <li>
            Performed routine and emergency maintenance on electrical systems
          </li>
          <li>
            Diagnosed and resolved electrical issues through effective
            troubleshooting
          </li>
          <li>Ensured compliance with safety standards and regulations</li>
        </ol>
      </div>
      <div className="bg-primary rounded-[14px] p-10">
        <div className="flex justify-between">
          <div className="sm:text-sm text-[11px]">
            <h1>TSM Creator</h1>
            <p className="text-txtprimaryalt1 sm:text-sm text-[11px] uppercase">
              Waterproofing Supervisor
            </p>
          </div>
          <span className="px-2 rounded-[10px] text-txtprimaryalt1 sm:text-sm text-[8px] uppercase bg-bgprimary flex justify-center items-center">
            2023-2024
          </span>
        </div>
        <div className="w-full h-[1px] bg-txtprimaryalt rounded-full mt-7"></div>
        <ol className="sm:text-[16px] text-sm text-justify gap-3 mt-3 flex flex-col ">
          <li className="">
            Supervised waterproofing processes to prevent leaks and structural
            damage.
          </li>
          <li>
            Managed electrical maintenance, including wiring, lighting, and
            power systems.
          </li>
          <li>
            Inspected and ensured compliance with safety and quality standards.
          </li>
          <li>
            {" "}
            Coordinated with construction teams to integrate electrical systems
            effectively.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default ExperienceAll