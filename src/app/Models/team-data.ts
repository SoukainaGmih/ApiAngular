export interface TeamMember {
    Nom: string;
    Prenom: string;
    numero_de_telephone: string;
    Email_Personnel: string;
    Email_JobIntech: string;
}

export interface TeamData {
    id: string;
    name: string;
    members: TeamMember[];
}
