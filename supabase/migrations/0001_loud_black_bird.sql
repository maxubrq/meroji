CREATE UNIQUE INDEX "user_table_user_id_unique" ON "users_table" USING btree ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "user_table_email_unique" ON "users_table" USING btree ("email");--> statement-breakpoint
CREATE INDEX "user_table_username_index" ON "users_table" USING btree ("username");--> statement-breakpoint
CREATE INDEX "user_table_created_at_index" ON "users_table" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "user_table_updated_at_index" ON "users_table" USING btree ("updated_at");--> statement-breakpoint
CREATE INDEX "user_table_deleted_at_index" ON "users_table" USING btree ("deleted_at");