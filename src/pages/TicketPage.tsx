import React from 'react';

interface TicketPageProps {
    editMode?: boolean;
}

function TicketPage(props: TicketPageProps) {
    const { editMode } = props;

    return (
        <div>
            {editMode ? <p>Edit mode is on</p> : <p>Edit mode is off</p>}
        </div>
    );
}

export default TicketPage;
