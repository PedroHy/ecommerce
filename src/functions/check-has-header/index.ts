import { HAS_HEADER } from "@/consts/has-header";

export const checkHasHeader = (asPath:string)=>{
    const hasHeader = Object.values(HAS_HEADER);
    return hasHeader.includes(asPath);
}