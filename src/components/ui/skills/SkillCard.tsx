import type { Skill } from '../../../types/types';

interface SkillCardProps {
    skill: Skill
    isActive?: boolean
    onTabClick?: () => void
}
const SkillCard = ({ skill, onTabClick }: SkillCardProps) => {

    const { id, title, img } = skill
    return (
        <div className='skill_card' key={id}>
            <img src={img} alt={title} />
            <h3
                onClick={onTabClick}
            >{title}</h3>
            {/* <p style={
                isActive ? { display: 'block' } : {display: 'none'}}>{description}</p> */}
        </div >
    );
};

export default SkillCard;