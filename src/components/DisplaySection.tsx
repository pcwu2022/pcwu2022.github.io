import React from 'react'
import Display from './Display'
import RichText from './RichText'

export type ProjectDomain = 'software' | 'hardware' | 'hybrid';

export type ProjectOrigin = 'startup' | 'competition' | 'academic' | 'personal' | 'student_org';

export type LeadershipRole = 'lead' | 'solo' | 'member';

export type AIUsage = 'core' | 'assisted' | 'none';

export type ProjectStatus = 'live' | 'github' | 'demo_video' | 'archived' | 'discontinued';

export type FilterableTags = {
  domain: ProjectDomain;
  tech_stack: string[];
  origin: ProjectOrigin;
  leadership: LeadershipRole;
  team_size: number;
  ai_usage: AIUsage;
  status: ProjectStatus;
  award_winning: boolean;
  start_month: `${number}-${number}`; // Standardizes YYYY-MM format
  end_month: `${number}-${number}` | 'present' | null;
};

export type DisplayContent = {
  id: string
  title: string
  supporting?: string[]
  images?: { src: string; alt: string }[]
  links?: { href: string; label: string }[]
  body?: string[]
  tags?: FilterableTags
}

// Allowed runtime arrays derived from your types
const DOMAINS: ProjectDomain[] = ['software', 'hardware', 'hybrid'];
const ORIGINS: ProjectOrigin[] = ['startup', 'competition', 'academic', 'personal', 'student_org'];
const ROLES: LeadershipRole[] = ['lead', 'solo', 'member'];
const AI_USAGES: AIUsage[] = ['core', 'assisted', 'none'];
const STATUSES: ProjectStatus[] = ['live', 'github', 'demo_video', 'archived', 'discontinued'];
const DATE_REGEX = /^\d{4}-\d{2}$/;

export function validateContent(data: unknown): DisplayContent {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Validation Error: Expected content item to be a non-null object.');
  }

  const item = data as Record<string, unknown>;

  // 1. Top-Level Required Fields
  if (typeof item.id !== 'string' || item.id.trim() === '') {
    throw new Error('Validation Error: Project must have a non-empty string "id".');
  }

  const projectId = item.id;

  if (typeof item.title !== 'string' || item.title.trim() === '') {
    throw new Error(`Validation Error [${projectId}]: Must have a non-empty string "title".`);
  }

  // 2. Optional Array Fields
  if (item.supporting !== undefined) {
    if (!Array.isArray(item.supporting) || !item.supporting.every((s) => typeof s === 'string')) {
      throw new Error(`Validation Error [${projectId}]: "supporting" must be an array of strings.`);
    }
  }

  if (item.images !== undefined) {
    if (
      !Array.isArray(item.images) ||
      !item.images.every(
        (img) =>
          typeof img === 'object' &&
          img !== null &&
          typeof img.src === 'string' &&
          typeof img.alt === 'string'
      )
    ) {
      throw new Error(
        `Validation Error [${projectId}]: "images" must be an array of objects with { src: string, alt: string }.`
      );
    }
  }

  if (item.links !== undefined) {
    if (
      !Array.isArray(item.links) ||
      !item.links.every(
        (link) =>
          typeof link === 'object' &&
          link !== null &&
          typeof link.href === 'string' &&
          typeof link.label === 'string'
      )
    ) {
      throw new Error(
        `Validation Error [${projectId}]: "links" must be an array of objects with { href: string, label: string }.`
      );
    }
  }

  if (item.body !== undefined) {
    if (!Array.isArray(item.body) || !item.body.every((b) => typeof b === 'string')) {
      throw new Error(`Validation Error [${projectId}]: "body" must be an array of strings.`);
    }
  }

  // 3. FilterableTags Validation
  if (item.tags !== undefined) {
    if (typeof item.tags !== 'object' || item.tags === null) {
      throw new Error(`Validation Error [${projectId}]: "tags" must be an object.`);
    }

    const tags = item.tags as Record<string, unknown>;

    if (!DOMAINS.includes(tags.domain as ProjectDomain)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.domain" must be one of [${DOMAINS.join(', ')}]. Received: "${tags.domain}"`
      );
    }

    if (
      !Array.isArray(tags.tech_stack) ||
      !tags.tech_stack.every((tech) => typeof tech === 'string')
    ) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.tech_stack" must be an array of strings.`
      );
    }

    if (!ORIGINS.includes(tags.origin as ProjectOrigin)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.origin" must be one of [${ORIGINS.join(', ')}]. Received: "${tags.origin}"`
      );
    }

    if (!ROLES.includes(tags.leadership as LeadershipRole)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.leadership" must be one of [${ROLES.join(', ')}]. Received: "${tags.leadership}"`
      );
    }

    if (typeof tags.team_size !== 'number' || tags.team_size < 1) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.team_size" must be a positive number.`
      );
    }

    if (!AI_USAGES.includes(tags.ai_usage as AIUsage)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.ai_usage" must be one of [${AI_USAGES.join(', ')}]. Received: "${tags.ai_usage}"`
      );
    }

    if (!STATUSES.includes(tags.status as ProjectStatus)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.status" must be one of [${STATUSES.join(', ')}]. Received: "${tags.status}"`
      );
    }

    if (typeof tags.award_winning !== 'boolean') {
      throw new Error(
        `Validation Error [${projectId}]: "tags.award_winning" must be a boolean.`
      );
    }

    if (typeof tags.start_month !== 'string' || !DATE_REGEX.test(tags.start_month)) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.start_month" must match "YYYY-MM" format. Received: "${tags.start_month}"`
      );
    }

    const isValidEndMonth =
      tags.end_month === null ||
      tags.end_month === 'present' ||
      (typeof tags.end_month === 'string' && DATE_REGEX.test(tags.end_month));

    if (!isValidEndMonth) {
      throw new Error(
        `Validation Error [${projectId}]: "tags.end_month" must be "YYYY-MM", "present", or null. Received: "${tags.end_month}"`
      );
    }
  }

  return data as DisplayContent;
}

const DisplaySection = ({ item }: { item: DisplayContent }) => {
  return (
    <Display
      id={item.id}
      title={item.title}
      supporting={item.supporting ?? []}
      images={item.images ?? []}
      links={item.links ?? []}
      techStack={item.tags?.tech_stack ?? []}
    >
      <RichText paragraphs={item.body ?? []} />
    </Display>
  )
}

export default DisplaySection
