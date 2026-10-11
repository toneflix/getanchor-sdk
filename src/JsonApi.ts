import type {
    IncludedResource,
    Relationship,
    Resource,
    ResourceIdentifier,
    ToManyRelationship,
} from './types/common'

interface WithIncluded {
    included?: IncludedResource[]
}

/**
 * Read the id (or ids) a resource's relationship points at.
 *
 * @example relationshipId(transfer, 'account') // '1696...-anc_acc'
 *
 * @param resource
 * @param name
 */
export function relationshipId (resource: Pick<Resource, 'relationships'>, name: string): string | undefined {
    const data = (resource.relationships?.[name] as Relationship | undefined)?.data

    return data && !Array.isArray(data) ? data.id : undefined
}

export function relationshipIds (resource: Pick<Resource, 'relationships'>, name: string): string[] {
    const data = (resource.relationships?.[name] as Relationship | ToManyRelationship | undefined)?.data
    if (!data) return []

    return Array.isArray(data) ? data.map(item => item.id) : [data.id]
}

/**
 * Find an `included` resource by identifier. Pass a relationship name and a
 * resource to follow that relationship instead.
 *
 * @param document  A response document or webhook event carrying `included`.
 * @param target    A resource identifier, or `[resource, relationshipName]`.
 */
export function findIncluded<T extends IncludedResource = IncludedResource> (
    document: WithIncluded,
    target: ResourceIdentifier | [Pick<Resource, 'relationships'>, string],
): T | undefined {
    const identifier = Array.isArray(target)
        ? (target[0].relationships?.[target[1]] as Relationship | undefined)?.data
        : target

    if (!identifier || Array.isArray(identifier)) return undefined

    return document.included?.find(item => item.id === identifier.id && item.type === identifier.type) as T | undefined
        ?? document.included?.find(item => item.id === identifier.id) as T | undefined
}

/**
 * Every `included` resource of a given type.
 *
 * @param document
 * @param type
 */
export function includedOfType<T extends IncludedResource = IncludedResource> (document: WithIncluded, type: string): T[] {
    return (document.included ?? []).filter(item => item.type === type) as T[]
}
