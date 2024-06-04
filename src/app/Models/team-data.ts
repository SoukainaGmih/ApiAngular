export interface TeamMember {
    student_id: string;
    Nom: string;
    Prenom: string;
    id_cin: string;
    numero_de_telephone: string;
    Email_JobIntech: string;
    address: string;
}

export interface TeamData {
    id: string;
    name: string;
    members: TeamMember[];
}

