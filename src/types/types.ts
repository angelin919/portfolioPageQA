export interface personalInfo {
    fullName: string,
    birthDate: Date,
    city: string,
    position: string
}

export interface Skill {
    id: string,
    title: string,
    category: "hard" | "soft"
    description: string 
    img: string

}

export interface Experience {
    id: string,
    title: string,
    description: string 


}
export interface Hobby {
    id: string,
    title: string,
    description: string 

}


export interface Education {
    id: string,
    title: string,
    desccription:string
    date: Date 

}
export interface Contact {
  type: 'email' | 'phone' |'github',
  contact: string,
  img: string,
}

