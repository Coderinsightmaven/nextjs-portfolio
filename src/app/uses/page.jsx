import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 32GB RAM (2021)">
            The 16” MacBook Pro with its M1 Pro chip and 32GB of RAM is a marvel
            of technology, enabling seamless multitasking and handling of
            complex tasks with astonishing speed and efficiency. Its Retina
            display brings visuals to life with striking clarity and color,
            making every task a visual pleasure. The combination of powerhouse
            performance, stunning display, and all-day battery life makes it an
            unrivaled tool for both professional and personal use.
          </Tool>
          <Tool title="Steelseries Arctic Nova Pro Wireless Headset">
            The SteelSeries Arctis Nova Pro Wireless Headset is a staple in my
            daily routine, providing exceptional sound clarity and a seamless,
            lag-free connection that elevates my gaming and music experiences.
            Its comfortable, durable build and dual-battery system allow for
            uninterrupted use, ensuring I'm always at the top of my game. The
            crisp microphone and high-fidelity speakers make it an indispensable
            accessory for both competitive gameplay and immersive audio
            sessions.
          </Tool>
          <Tool title="Logitech G915 Wireless Mechanical Keyboard">
            The Logitech G915 wireless mechanical keyboard offers a sublime
            typing experience that I find both responsive and satisfying, thanks
            to its low-profile mechanical switches that provide tactile feedback
            without being too loud. Its wireless connectivity ensures a
            clutter-free desk, allowing me to work seamlessly from anywhere
            without compromising on performance. Additionally, the long battery
            life and customizable RGB lighting not only enhance my productivity
            but also add a personalized touch to my workspace, making it a joy
            to use day in and day out.
          </Tool>
          <Tool title="Logitech MX Master 3 Mouse">
            The Logitech MX Master 3 Mouse has become an essential tool in my
            daily computing, offering unparalleled precision with its advanced
            tracking capabilities that make every movement smooth and
            effortless. Its ergonomic design fits perfectly in the palm of my
            hand, providing comfort for hours on end, which is crucial during
            long work sessions. The customizable buttons and the intuitive
            scroll wheel add layers of functionality that boost my productivity,
            allowing me to navigate through tasks with efficiency that other
            mice simply cannot match.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Microsoft Visual Studio Code">
            Microsoft Visual Studio Code is an incredibly efficient and
            versatile editor that has revolutionized the way I code. Its sleek
            interface, combined with powerful features like IntelliSense and
            built-in Git commands, streamlines my development workflow, making
            coding both faster and more enjoyable. The vast library of
            extensions allows me to tailor the environment to my exact needs,
            whether I'm writing JavaScript, Typescript, or any other language,
            turning a complex task into a seamless experience.
          </Tool>
          <Tool title="Github Copilot">
            GitHub Copilot has transformed the way I approach coding challenges,
            acting as an ever-present coding companion that provides intelligent
            suggestions in real-time. Its AI-driven insights help me navigate
            complex codebases and write code more efficiently, often introducing
            me to new libraries and best practices I might not have considered.
            The way it seamlessly integrates into my development environment,
            particularly with Visual Studio Code, allows for a fluid coding
            experience that accelerates my productivity and enhances the quality
            of my work.
          </Tool>
          <Tool title="Data Grip">
            DataGrip stands out as a comprehensive database management tool that
            has significantly improved my data handling tasks. Its intuitive
            query console, smart code completion, and on-the-fly error detection
            features make database operations incredibly efficient, turning SQL
            writing into a less daunting and more accurate process. The
            software's ability to connect to a wide variety of databases, along
            with its powerful data visualization tools, allows me to analyze and
            manipulate data with ease, making it an indispensable part of my
            data-centric toolkit.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma has revolutionized my approach to design by offering a
            collaborative and user-friendly interface that streamlines the
            creation of high-fidelity prototypes. Its real-time collaboration
            feature allows me to work seamlessly with teammates, no matter where
            we are, fostering a more cohesive and immediate exchange of ideas.
            The vector-based design tools and extensive plugin ecosystem empower
            me to turn concepts into tangible designs with efficiency and
            precision, making Figma an essential asset in my design toolkit.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Microsoft To Do">
            Microsoft To Do is an indispensable organizational tool that has
            greatly enhanced my daily productivity and task management. Its
            clean, intuitive interface allows me to capture tasks quickly, set
            reminders, and prioritize my day effortlessly, ensuring that I stay
            on top of my responsibilities. The satisfaction of checking off
            completed tasks is amplified by its seamless synchronization across
            all my devices, keeping my workflow smooth and coordinated no matter
            where I am.
          </Tool>
          <Tool title="Spotify">
            Spotify has completely transformed my productivity and listening
            experience with its vast library of music, podcasts, and curated
            playlists that cater to every mood and occasion. The personalized
            recommendations and discovery features have exposed me to a world of
            new artists and genres, enriching my musical landscape. Its
            user-friendly interface and the ability to create and share my own
            playlists make Spotify not just a streaming service but a central
            hub for my audio entertainment and exploration.
          </Tool>
          <Tool title="GitHub Kahnban Board">
            GitHub's Kanban board has been a game-changer for managing my
            software development projects, providing a visual overview of work
            in progress with a simple, drag-and-drop interface that promotes
            agile methodologies. It allows my team and me to track the flow of
            tasks from 'To Do' to 'Done,' facilitating a transparent and
            efficient way to monitor our project's momentum. The integration
            with GitHub issues and pull requests keeps everything synchronized,
            fostering a collaborative environment where every team member can
            see updates in real time, ensuring we stay aligned and focused on
            our collective goals.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
