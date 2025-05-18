CREATE TABLE "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"username" text NOT NULL,
	"email" text,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "users_table_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
