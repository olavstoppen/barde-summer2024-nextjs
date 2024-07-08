export type task = {
    id: number; //Et unikt nummer som brukes for å identifisere den spesifikke oppgaven
    name: string; //Tittelen til oppgaven
    type: 'Lekkasje' | 'Motor' | 'Service' | 'Styring'; //Beskriver hva oppgaven/feilen handler om (Lekkasje, Motor, Service, Styring)
    status: 'Unplanned' | 'Planned' | 'Active' | 'Done'; //Beskriver tilstanden til oppgaven
    description: string; //En mer detaljert beskrivelse av det som skal behandles
    historic_data: string[]; //Beskriver alt som har skjedd med oppgaven
    date: string;
    start_date: string;
    due_date: string;
};
export type machine = {
    id: number; //Et unikt nummer som brukes for å identifisere den spesifikke maskinen
    name: string; //Tittelen til maskinen
    type: string; //Beskriver hvilken kategori eller gruppe maskinen tilhører
    status: 'Maintenance' | 'In warehouse' | 'Done'; //Beskriver tilstanden til maskinen
    description: string;
    historic_data: string[]; //Beskriver alt som har skjedd med maskinen, og gir grunnlag for læring
    last_yearly_check: string;
    date: string;
};
export type project = {
    id: number; //Et unikt nummer som brukes for å identifisere det spesifikke prosjektet
    name: string; //Tittelen til prosjektet
    type: string;
    status: 'Planned' | 'Active' | 'Done'; //Beskriver tilstanden til prosjektet
    description: string;
    historic_data: string[]; //Beskriver alt som har skjedd på prosjektet
    date: string;
};
