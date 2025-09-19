import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { LogOut, User, Database } from 'lucide-react';

export function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Welcome Back!
                </h1>
                <p className="text-muted-foreground">
                  You're successfully logged in to your dashboard
                </p>
              </div>
            </div>
            <Button onClick={signOut} variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>

          {/* User Info Card */}
          <Card className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Account Information
              </CardTitle>
              <CardDescription>
                Your account details and authentication status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span className="font-medium">Email:</span>
                  <span className="text-muted-foreground">{user?.email}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span className="font-medium">User ID:</span>
                  <span className="text-muted-foreground font-mono text-sm">{user?.id}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span className="font-medium">Last Sign In:</span>
                  <span className="text-muted-foreground">
                    {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Database Connection Status */}
          <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database Connection
              </CardTitle>
              <CardDescription>
                Your app is connected to Lovable Cloud (powered by Supabase)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Database Status</span>
                </div>
                <span className="text-green-600 font-medium">Connected</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Your authentication is working perfectly! Users can now sign up, sign in, and access protected content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}