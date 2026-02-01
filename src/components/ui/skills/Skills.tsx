import React from 'react';
import { useData } from '../../../hooks/useData';
import './Skills.css'
import SkillCard from './SkillCard';
import type { Skill } from '../../../types/types';

const Skills = () => {
    const { skills, loading, activeTab, handleTabClick, description

    } = useData()
    console.log('SKILLS', description)
    if (loading) {
        return (
            <div className='header'>
                <h2>Info</h2>
                <p>Загрузка данных...</p>
            </div>
        );
    }
     if (!skills) {
        return <div>Данные об обучении не найдены</div>;
    }

    return (
        <div className='skills_container'>
            <h3 className='skills_title'>Hard Skills</h3>

            <div className='skills_content'>

                {
                    skills.map((skill: Skill) => {
                        return <SkillCard
                            skill={skill}
                            isActive={String(activeTab) == skill.id}
                            onTabClick={() => handleTabClick(Number(skill.id))} />

                    })

                }

            </div>
            <div className='skill_description'>
                <p>
                    {
                        description
                    }
                </p>
            </div>
        </div>
    );
};

export default Skills;