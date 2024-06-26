export function terminalCommand(command: string): string {
  switch (command.toLowerCase()) {
    case "help":
      return "Available commands: help, about, projects, skills, contact";
    default:
      return `Command not recognized: ${command}. Type 'help' for available commands.`;
  }
}
