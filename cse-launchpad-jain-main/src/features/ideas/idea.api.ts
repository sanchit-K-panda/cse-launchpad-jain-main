import { IdeaInput } from "./idea.schema";


// Mock database
const ideas: (IdeaInput & { id: string, author: string, date: string })[] = [
    {
        id: "1",
        title: "Smart Waste Management",
        description: "IoT-based waste bins that notify collection trucks when full.",
        category: "Environment",
        isPublic: true,
        author: "John Doe",
        date: "2024-03-15"
    },
    {
        id: "2",
        title: "AI Tutor for Rural Education",
        description: "An offline-first AI tutor app for students in remote areas.",
        category: "Education",
        isPublic: true,
        author: "Jane Smith",
        date: "2024-03-14"
    }
];

export const submitIdea = async (data: IdeaInput): Promise<{ id: string; status: 'success' }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Idea Submitted:", data);
            const newIdea = {
                ...data,
                id: Math.random().toString(36).substring(7),
                author: "Current User",
                date: new Date().toISOString().split('T')[0]
            };
            ideas.unshift(newIdea);
            resolve({
                id: newIdea.id,
                status: 'success'
            });
        }, 1500); // Simulate network delay
    });
};

export const fetchIdeas = async (): Promise<typeof ideas> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ideas);
        }, 1000);
    });
};
