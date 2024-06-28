import ProfilePicture from '../components/ProfilePicture'
import Section from '../components/Section'
import ContactInfo from '../components/ContactInfo'
import Skill from '../components/Skill'
import WorkExperience from '../components/WorkExperience'

export default function Cv() {
  return (
    <div className="min-h-screen bg-zinc-100 p-4 flex justify-center items-center">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
      <div className="flex">
        <div className="bg-zinc-800 text-white p-6 w-1/3">
          <ProfilePicture src="https://placehold.co/128x128" alt="Profile Picture" />
          <Section title="CONTACT">
            <ContactInfo label="PHONE" value="+44 123 456 789" />
            <ContactInfo label="EMAIL" value="yourname@name.com" />
            <ContactInfo label="ADDRESS" value="Your address..." />
            <ContactInfo label="WEBSITE" value="Yoursite.com" />
          </Section>
          <Section title="ACHIEVEMENT">
            <ContactInfo label="2013" value="BIG PROJECT\nLorem dolor sit amet, consectetur adipiscing elit." />
            <ContactInfo label="2015" value="BIG PROJECT\nLorem dolor sit amet, consectetur adipiscing elit." />
          </Section>
          <Section title="LANGUAGE">
            <p className="mb-2">English</p>
            <p className="mb-2">Chinese</p>
            <p className="mb-2">Spanish</p>
            <p className="mb-2">French</p>
          </Section>
        </div>
        <div className="p-6 w-2/3">
          <Section title="WORK EXPERIENCE">
            <WorkExperience period="2010-2012" company="LOREM IPSUM COMPANY NAME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <WorkExperience period="2012-2015" company="LOREM IPSUM COMPANY NAME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <WorkExperience period="2015-2018" company="LOREM IPSUM COMPANY NAME" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </Section>
          <Section title="EDUCATION">
            <WorkExperience period="2010-2012" company="LOREM IPSUM" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <WorkExperience period="2012-2015" company="LOREM IPSUM" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </Section>
          <Section title="SKILLS">
            <div className="flex flex-wrap">
              <Skill skill="Graphic Design" level={3} />
              <Skill skill="Web Design" level={4} />
              <Skill skill="Drawing" level={5} />
              <Skill skill="Animation" level={2} />
            </div>
          </Section>
        </div>
      </div>
    </div>
  </div>
  )
}
