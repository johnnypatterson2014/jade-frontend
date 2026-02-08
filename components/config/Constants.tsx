
export const OPENAI_MODEL = "gpt-4.1";
export const OPENAI_TEMPERATURE = '1';

export const mySqlConnectionParams = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'feskMysqlDB',
    database: 'feskDb'
}

export interface TraceTreeItem {
    trace_id: string
    name?: string
    agent_name?: string
    input?: string
    output?: string
    child_ids?: string[]
    parent_id?: string
    children?: TraceTreeItem[]
    traceBody?: any
}
