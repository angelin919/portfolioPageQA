import { useData } from '../../../hooks/useData';
import './Footer.css'

const Footer = () => {

    const { phone, email, github, loading } = useData()
    console.log(phone, email, github,)


    if (loading) {
        return <div className='footer'>Загрузка контактов...</div>;
    }



    console.log('Phone contact:', phone)

    console.log('!!!!', phone)
    return (
        <div className='footer'>
            <ul className='contacts_list'>
                <h2>Контакты</h2>

                {phone && (
                    <li>
                        <img src={phone.img} alt={phone.type} width={30} />
                        {phone.contact}
                    </li>
                )}

                {email && (
                    <li>
                        <img src={email.img} alt={email.type} width={30} />
                        {email.contact}
                    </li>
                )}

                {github && (
                    <li>
                        <img src={github.img} alt={github.type} width={30} />
                        {github.contact}
                    </li>
                )}
            </ul>

        </div>
    );
};

export default Footer;