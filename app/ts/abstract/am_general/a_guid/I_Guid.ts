export module am_general
{
  export interface I_Guid 
  {
    equals(other: I_Guid): boolean;

    isEmpty(): boolean ;

    toString(): string ;

    toJSON(): any ;
  }
} 