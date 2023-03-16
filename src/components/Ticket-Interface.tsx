export interface Ticket {
    id: number;
    category?: string;
    color?: string;
    title?: string;
    owner?: string;
    avatar?: string;
    status?: string;
    priority: number;
    progress: number;
    description?: string;
    timestamp?: string;
    documentId?: string;
}
