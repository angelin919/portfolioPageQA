import { useData } from '../../../hooks/useData';
import './Header.css'
import ThemeToggle from '../../ui/theme/ThemeToggle';

const Header = () => {

    const { personalInfo, loading } = useData()
    if (loading) {
        return (
            <div className='header'>
                {/* <h2>Info</h2> */}
                <p>Загрузка данных...</p>
            </div>
        );
    }

        if (!personalInfo) {
        return <div>Данные об обучении не найдены</div>;
    }

    const formattedDate = new Date(personalInfo.birthDate).toLocaleDateString('ru-RU');


    return (
        <div className='header'>
            <ul className='personalInfo'>
                {/* <h2>Info:</h2> */}
                <li className='personal_info_item'><span>Name:</span> {personalInfo.fullName}</li>
                <li className='personal_info_item'><span>Date of Birth:</span> {formattedDate}</li>
                <li className='personal_info_item'><span>Address:</span>  {personalInfo.city}</li>
                <li className='personal_info_item'><span>Position:</span> {personalInfo.position}</li>

            </ul>
            <ThemeToggle />

        </div>
    );
};

export default Header;