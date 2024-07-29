import axios from 'axios';

const API_URL = 'http://localhost:8000/api/chat';

export const sendPrompt = async (prompt) => {
    try {
        const response = await axios.post(API_URL, { prompt });
        return response.data.response;
    } catch (error) {
        console.error('Error sending prompt to RAG LLM:', error);
        throw error;
    }
};
