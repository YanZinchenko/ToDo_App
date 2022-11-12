import React from 'react';
import TodoItem from './item/TodoItem';
const date = [
    {
        _id: 'qwer11',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: 'qwer113123',
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id: 'qwer11567',
        title: 'Send the finished assignment',
        isCompleted: false,
    },
];

const Home = () => {
    const [todos, setTodos] = useState(date);
    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>
                Todo for junior
            </h1>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
};

export default Home;
