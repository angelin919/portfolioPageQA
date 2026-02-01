import { useCallback, useEffect, useMemo, useState } from "react";
import type { Contact, Education, Experience, personalInfo, Skill, Hobby } from "../types/types";

interface PortfolioData {
    personalInfo: personalInfo,
    skills: Skill[],
    experience?: Experience[],
    educations: Education[],
    hobbies?: Hobby[],
    contacts: Contact[]
}

export const useData = () => {
    const [data, setData] = useState<PortfolioData | null>(null)

    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true); // Добавьте loading состояние
    const [activeTab, setActiveTab] = useState<number | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);

                const portfolioData = await import('../data/data')
                console.log('DATA', {
                    portfolioData: portfolioData


                })

                setData(portfolioData.default)


            } catch (err) {
                setError('Ошибка загрузки данных')
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        loadData()


    }, [data])
    //Skills

    const getSkillsByCategory = useCallback((category: string) => {
        if (!data) return [];
        return data.skills.filter((skill: Skill) => skill.category === category);
    }, [data]);

    //SlillsTabs
    const handleTabClick = (id: number) => {
        // Если кликаем по уже активной вкладке - закрываем её
        setActiveTab(activeTab === id ? null : id);
    };

    //Contacts
    const getAllContacts = useMemo(() => {
        if (!data) return [];
        return data.contacts
    }, [data])

    const getPersonalInfo = useMemo(() => {
        if (!data) return null;
        return data.personalInfo
    }, [data])
    const contacts = useMemo(() => data?.contacts || [], [data]);
    const skills = useMemo(() => data?.skills || [], [data]);




    const phone = useMemo(() =>
        contacts.find((contact: Contact) => contact.type === 'phone') || null,
        [contacts]);

    const email = useMemo(() =>
        contacts.find((contact: Contact) => contact.type === 'email') || null,
        [contacts]);

    const github = useMemo(() =>
        contacts.find((contact: Contact) => contact.type === 'github') || null,
        [contacts]);

    const activeSkill = useMemo(() =>
        skills.find((skill: Skill) => Number(skill.id) === activeTab) || null,
        [skills, activeTab]);

    return {
        data,
        personalInfo: data?.personalInfo || null,
        contacts: data?.contacts || [],
        educations: data?.educations || null,
        phone,
        email,
        github,
        description: activeSkill?.description,

        activeTab,

        error,
        loading,

        skills: data?.skills || null,
        getSkillsByCategory,
        getAllContacts,
        getPersonalInfo,
        handleTabClick,


    }

}