
export module rm_general
{  
  export class R_Guid 
  {

     public static validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

     public static EMPTY = "00000000-0000-0000-0000-000000000000";

     public static isGuid(guid: any) 
     {
        const value: string = guid.toString();
        return guid && (guid instanceof R_Guid || R_Guid.validator.test(value));
     }

     public static create(): R_Guid 
     {
       return new R_Guid([R_Guid.gen(2), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(3)].join("-"));
     }

     public static createEmpty() : R_Guid 
     {
       return new R_Guid("emptyguid");
     }

     public static parse(guid: string) : R_Guid 
     {
        return new R_Guid(guid);
     }

     public static raw(): string 
     {
        return [R_Guid.gen(2), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(3)].join("-");
     }

     private static gen(count: number) 
     {
       let out: string = "";
       for (let i: number = 0; i < count; i++) {
          // tslint:disable-next-line:no-bitwise
          out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
       }
       return out;
     }

     private value: string;

     private constructor(guid: string) 
     {
       if (!guid) { throw new TypeError("Invalid argument; `value` has no value."); }

       this.value = R_Guid.EMPTY;

       if (guid && R_Guid.isGuid(guid)) {
         this.value = guid;
       }
    }

    public equals(other: R_Guid): boolean {
        // Comparing string `value` against provided `guid` will auto-call
        // toString on `guid` for comparison
        return R_Guid.isGuid(other) && this.value === other.toString();
    }

    public isEmpty(): boolean {
        return this.value === R_Guid.EMPTY;
    }

    public toString(): string 
    {
        return this.value;
    }

    public toJSON(): any 
    {
        return {
          value: this.value,
        };
    }
  }

}
