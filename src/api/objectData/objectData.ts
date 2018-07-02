import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('object_data')
export class ObjectData {

   @PrimaryColumn()
   objectID: number;

   @Column()
   objectUID: number;

   @Column()
   instance: number;

   @Column()
   classname: string;

   @Column("datetime")
   datestamp: Date;

   @Column()
   characterID: number;

   @Column("json")
   worldspace: string;

   @Column("json")
   inventory: string;

   @Column("json")
   hitpoints: string;

   @Column()
   fuel: number;

   @Column()
   damage: number;

   @Column("datetime")
   last_updated: Date;

}
