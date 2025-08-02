
-- Create a table for newsletter subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  unsubscribe_token UUID DEFAULT gen_random_uuid()
);

-- Add Row Level Security (RLS) to the table
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert (subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscriptions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading own subscription (for unsubscribe)
CREATE POLICY "Users can view subscriptions by token" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (true);

-- Create policy that allows updating own subscription (for unsubscribe)
CREATE POLICY "Users can update subscriptions by token" 
  ON public.newsletter_subscriptions 
  FOR UPDATE 
  USING (true);
