export function terminalCommand(command: string): string {
  switch (command.toLowerCase()) {
    case "help":
      return help;
    case "about":
      return about;
    case "projects":
      return projects;
    case "skills":
      return skills;
    case "contact":
      return contact;
    case "email":
      email();
      return "redirected to mail";
    case "instagram":
      instagram();
      return "redirected to instagram";
    case "twitter":
      twitter();
      return "redirected to twitter/x";
    case "x":
      twitter();
      return "redirected to twitter/x";
    case "linkedin":
      linkedin();
      return "redirected to linkedIn";
    case "github":
      github();
      return "redirected to github";
    case "discord":
      discord();
      return "redirected to discord";
    default:
      return `Command not recognized: ${command}. Type 'help' for available commands.`;
  }
}

const help: string = `
Available commands: <br />
help\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- get a list of all available commands<br /> 
about\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- get to know El-ameen Daiyabu a bit more!<br />
projects\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- get an overview on some of the projects i worked on<br /> 
skills\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- get a list of my proficient skills in web development<br /> 
contact\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- get in touch with me!!!
`;

const about: string = `
I am from abuja, Nigeria. Absolutely in love with anime, One Piece especially ;) <br />
I am really passionate with computer systems and programming. The idea of building <br />
something from nothing really fascinates me. I love challenging myself. I love problem <br />
solving. I went into tech starting with arduinos and the C++ programming language. <br />
Many years later i am now always poking around, finding new and interesting things. <br />
And ofcourse i use Arch BTW!!! & Vim BTW!!!. <br />
I enjoy web development and the challenges it comes with. Its always nice yunno <br />
I recently graduated uni with a computer science degree and cant wait for the journey <br />
that lies in front. Cheers to that and many more!!!
`;

const projects: string = `
Currently unavailable. Check in later!!!
`;

const skills: string = `
<div class="flex text-[#fac9f2] gap-8">
    <div>
        <h1 class="leading-8 text-[#839DCB]">Front-End</h1>
        <p>HTML</p>
        <p>CSS / Tailwind CSS</p>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>React</p>
        <p>Next JS</p>
    </div>

    <div>
        <h1 class="leading-8 text-[#839DCB]">Back-End</h1>
        <p>Node JS</p>
        <p>Express JS</p>
        <p>Golang</p>
    </div>

    <div>
        <h1 class="leading-8 text-[#839DCB]">Tools & Technologies</h1>
        <p>Git</p>
        <p>Docker</p>
        <p>Vitest</p>
        <p>Supabase</p>
        <p>PostgreSQL</p>
        <p>Postman</p>
    </div>
</div>
`;

const contact: string = `

<div>
    <div class="text-[#fac9f2]">
        <p>Email</p>
        <p>Instagram</p>
        <p>Twitter/x</p>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Discord</p>
    </div>
    <p></p>
    <p>To contact me through preferred medium, type it out <span class="text-[#E6CDA0]">E.g instagram</span></p>
</div>
`;

const email = () => window.open("mailto:elameendaiyabu@gmail.com");

const instagram = () => window.open("https://www.instagram.com/daiyabuu_");

const twitter = () => window.open("https://www.x.com/elameendk");

const linkedin = () =>
  window.open("https://www.linkedin.com/in/el-ameen-daiyabu");

const github = () => window.open("https://www.github.com/elameendaiyabu");

const discord = () => window.open("https://www.discord.com/users/elameend");
