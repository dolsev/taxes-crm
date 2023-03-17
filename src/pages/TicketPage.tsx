import React from 'react';
import styled from "styled-components";
import {useState} from 'react'

interface TicketPageProps {
    editMode?: boolean;
}

const Ticket = styled.div``;
const Title = styled.h1``;
const TicketContainer = styled.div``;
const CustomForm = styled.form`
display: flex;
`;
const Section = styled.section`
display: flex;
  flex-direction: column;
gap:15px;`;
const CustomLabel = styled.label``;
const CustomInput = styled.input``;
const CustomSelect = styled.select`
`
const CustomOption = styled.option`
`
const MultipleInputContainer = styled.div`
`


export const TicketPage: React.FC<TicketPageProps> = ({editMode = false}) => {
    const [formData, setFormData] = useState({
        status:'not started',
        progress:0,
        timestamp: new Date().toISOString(),
        title:'',
        description:'',
        category:'',
        priority:0,
    })

    const handleSubmit = () => {
        console.log('Submitted');
    };

    const handleChange = (e:any) => {
    const value = e.target.value
        const name = e.target.name
        setFormData(prevState => ({
            ...prevState,
            [name]:value}))
    };

    const categories = ['test1' ,'test2']

    console.log(formData)
    return (
        <Ticket>
            <Title>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</Title>
            <TicketContainer>
                <CustomForm onSubmit={handleSubmit}>
                    <Section>
                        <CustomLabel htmlFor='title'>Title</CustomLabel>
                        <CustomInput
                            id='title'
                            name='title'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />
                        <CustomLabel htmlFor='description'>Description</CustomLabel>
                        <CustomInput
                            id='description'
                            name='description'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />
                        <CustomLabel>Category</CustomLabel>
                        <CustomSelect
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {categories.map((category, index) => (
                                <CustomOption key={index} value={category}>{category}</CustomOption>
                            ))}
                        </CustomSelect>

                        <CustomLabel htmlFor='new-category'>New Category</CustomLabel>
                        <CustomInput
                            id='new-category'
                            name='category'
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.category}
                        />
                        <CustomLabel>Priority</CustomLabel>
                        <MultipleInputContainer>
                            <CustomInput
                            id='priority-1'
                            name='priority'
                            type='radio'
                            onChange={handleChange}
                            value={1}
                            checked={formData.priority===1}
                            />
                            <CustomLabel htmlFor='priority-1'>1</CustomLabel>
                            <CustomInput
                                id='priority-2'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={2}
                                checked={formData.priority===2}
                            />
                            <CustomLabel htmlFor='priority-2'>2</CustomLabel>
                            <CustomInput
                                id='priority-3'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={3}
                                checked={formData.priority===3}
                            />
                            <CustomLabel htmlFor='priority-3'>3</CustomLabel>
                            <CustomInput
                                id='priority-4'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={4}
                                checked={formData.priority===4}
                            />
                            <CustomLabel htmlFor='priority-4'>4</CustomLabel>
                            <CustomInput
                                id='priority-5'
                                name='priority'
                                type='radio'
                                onChange={handleChange}
                                value={5}
                                checked={formData.priority===5}
                            />
                            <CustomLabel htmlFor='priority-5'>5</CustomLabel>
                        </MultipleInputContainer>

                        {/*editMode&&  */}
                        <>
                        <CustomInput
                            type='range'
                            id='progress'
                            name='progress'
                            value={formData.progress}
                            min='0'
                            max='100'
                            onChange={handleChange}
                            />
                            <CustomLabel htmlFor='progress'>Progress</CustomLabel>
                        </>
                        <CustomLabel>Status</CustomLabel>
                        <CustomSelect
                        name='status'
                        value={formData.status}
                        onChange={handleChange}
                        >
                            <CustomOption selected={formData.status==='done'} value='done'>Done</CustomOption>
                            <CustomOption selected={formData.status==='done'} value='done'>Done</CustomOption>
                        </CustomSelect>
                    </Section>
                </CustomForm>
            </TicketContainer>
        </Ticket>
    );
};
