CREATE TABLE `incidents` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`status` text DEFAULT 'active',
	`dateResolved` text,
	`individualsId` integer,
	`organisationId` integer,
	`userId` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`individualsId`) REFERENCES `individual`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`organisationId`) REFERENCES `organisation`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `individual` (
	`id` integer PRIMARY KEY NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`country` text NOT NULL,
	`createdBy` integer DEFAULT 1 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `organisation` (
	`id` integer PRIMARY KEY NOT NULL,
	`orgName` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`country` text NOT NULL,
	`city` text NOT NULL,
	`name` text NOT NULL,
	`createdBy` integer DEFAULT 1 NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`city`) REFERENCES `individual`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`email` text NOT NULL,
	`role` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
