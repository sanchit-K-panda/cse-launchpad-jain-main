import { IdeaInput } from "./idea.schema";

// Mock Data
const MOCK_IDEAS = [
    {
        id: "1",
        title: "Smart Waste Management",
        description: "IoT-based waste bins that notify collection trucks when full.",
        category: "Environment",
        isPublic: true,
        author: "Khush",
        date: "2024-03-15"
    },
    {
        id: "2",
        title: "AI Tutor for Rural Education",
        description: "An offline-first AI tutor app for students in remote areas.",
        category: "Education",
        isPublic: true,
        author: "Jitesh",
        date: "2024-03-14"
    }
];

export const submitIdea = async (data: IdeaInput): Promise<{ id: string; status: 'success' }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newIdea = {
                ...data,
                id: Math.random().toString(36).substring(7),
                author: "Test User",
                date: new Date().toLocaleDateString()
            };
            MOCK_IDEAS.unshift(newIdea);

            resolve({
                id: newIdea.id,
                status: 'success'
            });
        }, 1000);
    });
};

export const fetchIdeas = async (): Promise<any[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...MOCK_IDEAS]);
        }, 1000);
    });
};
