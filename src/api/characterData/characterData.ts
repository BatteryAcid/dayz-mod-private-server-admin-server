import { Entity, Column, PrimaryColumn, ColumnType } from "typeorm";

@Entity('character_data')
export class CharacterData {

   @Column()
   playerID: number;

   @PrimaryColumn()
   characterID: number;

   @Column()
   playerUID: number;

   @Column()
   instanceID: number;

   @Column("datetime")
   Datestamp: Date;

   @Column("datetime")
   LastLogin: Date;

   @Column("longtext")
   Inventory: string;

   @Column("longtext")
   Backpack: string;

   @Column()
   Worldspace: string;

   @Column("datetime")
   LastAte: Date;

   @Column("datetime")
   LastDrank: Date;

   @Column()
   KillsZ: number;

   @Column()
   HeadshotsZ: number;

   @Column()
   distanceFoot: number;

   @Column()
   duration: number;

   @Column()
   currentState: string;

   @Column()
   KillsH: number;

   @Column()
   Model: string;

   @Column()
   KillsB: number;

   @Column()
   Humanity: number;

   @Column("datetime")
   last_updated: Date;
}
