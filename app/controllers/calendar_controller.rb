class CalendarController < ApplicationController
  before_action :set_client, only: [:index, :new, :update, :destroy]
  def index
    @client.update!(session[:authorization])
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = @client
    @calendars = service.list_calendar_lists
    
  end
  def new
    @client.update!(session[:authorization])
    service = Google::Apis::CalendarV3::CalendarService.new
    service.authorization = @client
    @cal = Google::Apis::CalendarV3::Calendar.new(
      summary: 'calendarSummary',
      time_zone: 'America/Los_Angeles'
    )

    @calendar = @client.insert_calendar(@cal)
  end
  def callback
  client = Signet::OAuth2::Client.new({
      client_id: Rails.application.secrets.google_client_id,
      client_secret: Rails.application.secrets.google_client_secret,
      token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
      redirect_uri: callback_url,
      code: params[:code]
    })

    response = client.fetch_access_token!

    session[:authorization] = response

    redirect_to calendar_index_url    
  end
  def redirect
    client = Signet::OAuth2::Client.new({
      client_id: Rails.application.secrets.google_client_id,
      client_secret: Rails.application.secrets.google_client_secret,
      authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
      scope: Google::Apis::CalendarV3::AUTH_CALENDAR,
      redirect_uri: callback_url
    })

    redirect_to client.authorization_uri.to_s
  end

  private

  def set_client
    @client = Signet::OAuth2::Client.new({
      client_id: Rails.application.secrets.google_client_id,
      client_secret: Rails.application.secrets.google_client_secret,
      token_credential_uri: 'https://accounts.google.com/o/oauth2/token'
    })
  end
end
