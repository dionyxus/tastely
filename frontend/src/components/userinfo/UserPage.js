import React from 'react';
import UserTile from './UserTile';

//

function UserPage() {





    const list = [
        {
            name: 'amber',
            plan: 'canada',
            contact: '00000'
        },
        {
            name: 'hiroki',
            plan: 'canada',
            contact: '11111'
        },
        {
            name: 'yukimi',
            plan: 'canada',
            contact: '22222'
        },
        {
            name: 'karan',
            plan: 'India',
            contact: '33333'
        },
        {
            name: 'sai',
            plan: 'India',
            contact: '44444'
        },
        {
            name: 'bihara',
            plan: 'India',
            contact: '55555'
        },
        {
            name: 'loma',
            plan: 'Ukraine',
            contact: '6666'
        },
        {
            name: 'naoya',
            plan: 'japan',
            contact: '77777'
        },
        {
            name: 'takeru',
            plan: 'US',
            contact: '88888'
        },
        {
            name: 'tenshin',
            plan: 'LasVegas',
            contact: '99999'
        }


    ];

    return (



        <div>




            {
                list.map((item) => {
                    <UserTile name={item.name} plan={item.plan} contact={item.contact} />






                })
            }



        </div>










    );
}


export default UserPage;



/*
{
    items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}

                    {...provided.dragHandleProps}
                >

                    {item.content}
                </div>
            )}
        </Draggable>
    ))
}
*/