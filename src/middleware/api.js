import { QUIZLET_API, CLIENT_ID } from '../constants/env';
import axios from 'axios';

class QuizAPI {
    getSet(setId) {
        const url = `${QUIZLET_API}/${setId}`;
        return axios.get(url);
    }
}

export default new QuizAPI();