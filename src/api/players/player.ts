import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity('player_data')
export class Player {

    @Column()
    playerID: number;

    @PrimaryColumn()
    playerUID: number;

    @Column()
    playerName: string;

    @Column()
    playerMorality: number;

    @Column()
    playerSex: number;

}
