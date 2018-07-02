import { Entity, Column, PrimaryColumn, ColumnType } from "typeorm";

@Entity('character_data')
export class CharacterData {

   @PrimaryColumn()
   characterID: number;

   @Column()
   playerID: number;

   @Column()
   playerUID: number;

   @Column()
   instanceID: number;

   @Column("datetime")
   datestamp: Date;

   @Column("datetime")
   lastLogin: Date;

   @Column("json")
   inventory: string;

   @Column("json")
   backpack: string;

   @Column()
   worldspace: string;  

   @Column()
   medical: string;
   
   @Column()
   alive: number;
   
   @Column()
   generation: number;

   @Column("datetime")
   lastAte: Date;

   @Column("datetime")
   lastDrank: Date;

   @Column()
   killsZ: number;

   @Column()
   headshotsZ: number;

   @Column()
   distanceFoot: number;

   @Column()
   duration: number;

   @Column()
   currentState: string;

   @Column()
   killsH: number;

   @Column()
   model: string;

   @Column()
   killsB: number;

   @Column()
   humanity: number;

   @Column("datetime")
   last_updated: Date;
}
