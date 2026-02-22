import Image from 'next/image';
import aboutData from '../../../data/about.json';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function TeamSection() {
  if (!aboutData) {
    return null;
  }

  const team: TeamMember[] = aboutData.team;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">our team</span>
          <h2 className="font-heading text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">Our Team</h2>
        </div>
        <div className="flex flex-wrap -m-8">
          {team.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-8">
              <div className="text-center">
                <Image
                  className="mb-9 mx-auto"
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={150}
                  height={150}
                />
                <span className="inline-block mb-2 text-gray-300">{member.role}</span>
                <h3 className="text-3xl text-white">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
