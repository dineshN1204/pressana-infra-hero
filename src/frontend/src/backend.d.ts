import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface VisitSubmission {
    id: bigint;
    name: string;
    visitDate: string;
    visitTime: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<VisitSubmission>>;
    getSubmission(id: bigint): Promise<VisitSubmission>;
    submitVisit(name: string, phone: string, email: string, visitDate: string, visitTime: string, message: string): Promise<bigint>;
}
