import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';

@Module({
  imports: [EmailModule],
})

/**
 * Provides access to API routes and services.
 */
export class AppModule {

}
