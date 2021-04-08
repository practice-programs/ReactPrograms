import React from 'react';
import Person from './person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'asd',
            age: 20,
            skill: 'react'
        },
        {
            id: 2,
            name: 'wer',
            age: 22,
            skill: 'python'
        },
        {
            id: 3,
            name: 'sdf',
            age: 23,
            skill: 'vue'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
    return <div>{personList}</div>
}

export default NameList;