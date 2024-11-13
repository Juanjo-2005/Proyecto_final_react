import PropTypes from 'prop-types';
import {useState} from 'react';
import { TaskItem } from './TaskItem';

export function TaskList() {
    const [task, setTask] = useState([]);
    const [taskText, setTaskText] = useState('');
    const handleAddTask = (e) => {
        e.preventDefault();
        if(!taskText.trim()) return;
        setTask([...task, {id: Date.now(), text: taskText}]);
        setTaskText('')
    };
    return(
        // #cSpell:disable - Aquí va el contenido HTML de la página.
        <div>
            <h1>
                Prueba
            </h1>
            <p>mensaje de prueba</p>
        </div>
    );
}
