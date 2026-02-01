import { useData } from '../../../hooks/useData';
import type { Education } from '../../../types/types';
import EducationCard from './EducationCard';
import './Educations.css'

const Educations = () => {
    const { educations, loading } = useData()
    if (loading) {
        return (
            <div className='header'>
                <p>Загрузка данных...</p>
            </div>
        );
    }
    if (!educations) {
        return <div>Данные об обучении не найдены</div>;
    }


    return (
        <div className='educations_container'>
            <h3>Обучение:</h3>

            {
                educations.map((education: Education) => {
                    return <EducationCard education={education} />

                })

            }


        </div>
    );
};

export default Educations;