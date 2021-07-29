import { registerEnumType } from '@nestjs/graphql';

export enum TaskStatus {
    NOT_STARTED,
    IN_PROGRESS,
    DONE
}

export enum SortType {
    ASC = "asc",
    DESC = "desc"
}

registerEnumType(TaskStatus, {
    name: 'TaskStatus',
});

registerEnumType(SortType, {
    name: 'SortType',
});
